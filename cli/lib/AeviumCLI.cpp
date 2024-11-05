#include <iostream>
#include <fstream>
#include <string>
#include <algorithm>
#include <vector>
#include <cctype>
#include <locale>
#include <map>
#include <cstdlib> // For system()
using namespace std;

bool fileExists(string fileName) {
    ifstream infile(fileName);
    return infile.good();
}

string APP_VERSION() {
    return "1.0.0.0";
}

struct Env {
private:
    string path;
public:
    /*
     * Returns `true` if `.env` file exists
     */
    Env() : path(".env") {}  // Assuming the working directory is /cli

    bool exists() {
        return fileExists(path);
    }

    string getPath() const {
        return path;
    }

    string getKey(string k, string _default = "") {
        ifstream envFile(path);
        string line;
        while (getline(envFile, line)) {
            size_t pos = line.find('=');
            if (pos != string::npos) {
                string key = line.substr(0, pos);
                string value = line.substr(pos + 1);
                if (key == k) {
                    return value;
                }
            }
        }

        return _default;
    }

    void setKey(string k, string v) {
        // Read all key-value pairs into a map
        map<string, string> kvMap;
        ifstream envFile(path);
        string line;
        while (getline(envFile, line)) {
            size_t pos = line.find('=');
            if (pos != string::npos) {
                string key = line.substr(0, pos);
                string value = line.substr(pos + 1);
                kvMap[key] = value;
            }
        }
        envFile.close();

        // Update or insert the key-value pair
        kvMap[k] = v;

        // Write back all key-value pairs
        ofstream envFileOut(path);
        for (const auto& kv : kvMap) {
            envFileOut << kv.first << "=" << kv.second << endl;
        }
        envFileOut.close();
    }

    void deleteKey(string k) {
        // Read all key-value pairs into a map
        map<string, string> kvMap;
        ifstream envFile(path);
        string line;
        while (getline(envFile, line)) {
            size_t pos = line.find('=');
            if (pos != string::npos) {
                string key = line.substr(0, pos);
                string value = line.substr(pos + 1);
                kvMap[key] = value;
            }
        }
        envFile.close();

        // Erase the key if it exists
        kvMap.erase(k);

        // Write back all key-value pairs
        ofstream envFileOut(path);
        for (const auto& kv : kvMap) {
            envFileOut << kv.first << "=" << kv.second << endl;
        }
        envFileOut.close();
    }
};

int main(int argc, char* argv[]) {
    Env env;
    string pythonAlias;

    cout << "Aevium CLI Version " + APP_VERSION() << endl;


    if (!env.exists()) {
        string c;
        cout << "Welcome to the Aevium CLI! Since you are a new user, we have to ask a few questions to get started." << endl;
        cout << "Press any key to begin setup…";
        cin >> c;

        cout << "1) What is the Python Command Alias (e.g. 'python3', 'python', etc)?" << endl;
        cout << ">>> ";
        cin >> pythonAlias;

        cout << endl;
        cout << "Starting configuration setup." << endl;
        cout << "\tCreating .env file..." << endl;

        // Set the PYTHON_ALIAS in the .env file
        env.setKey("PYTHON_ALIAS", pythonAlias);

        cout << "\t Successfully configured Aevium CLI" << endl;
    } else {
        // Get the PYTHON_ALIAS from the .env file
        pythonAlias = env.getKey("PYTHON_ALIAS");
        if (pythonAlias.empty()) {
            cerr << "Error: PYTHON_ALIAS not set in .env file." << endl;
            return 1;
        }
    }

    // Construct command-line arguments
    string args;
    for (int i = 1; i < argc; ++i) {
        args += string(argv[i]) + " ";
    }

    // Get the `cli.py` path
    string cliPyPath = env.getKey("CLI_PYTHON_FILEPATH", "../lib/app/cli.py");
    env.setKey("CLI_PYTHON_FILEPATH", cliPyPath);

    // Adjust the path to __init__.py as needed
    string command = pythonAlias + " " + cliPyPath + " " + args;

    system(command.c_str());
    return 0;
}
