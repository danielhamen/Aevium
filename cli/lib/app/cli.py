global console
import re
import sys
import os
from typing import Tuple

from regex import L

__DIR__ = os.path.join("../../../", os.path.abspath(os.path.dirname(__file__)))

def APP_VERSION() -> str:
    """
    Returns the current app version based on the `APP_VERSION` file
    """

    # Path to `APP_VERSION` file (absolute)
    APP_VERSION_FILE = os.path.join(__DIR__, "APP_VERSION")

    # Open the `APP_VERSION` file then return it
    with open(APP_VERSION_FILE) as file:
        v: str = file.read().strip()

        return v

class ArgType: pass
""" Base class for Command-Line Parameter Types """

class String(ArgType): pass
class Numeric(ArgType): pass
class Boolean(ArgType): pass
class NullType(ArgType): pass

class Arg:
    value: str
    index: int
    type: ArgType

class ArgList:
    _list: list[Arg]

    def __len__(self) -> int: ...
    """ Returns the amount of arguments """

class Console:
    _log: list[str]
    """ """

    _debug: bool
    """ """

    def debug(self, message: str) -> None: ...
    """ """

    def log(self, message: str) -> None: ...
    """ """

    def warn(self, message: str) -> None: ...
    """ """

    def error(self, message: str) -> None: ...
    """ """

    def fatal(self, message: str) -> None: ...
    """ """

def parse_command(cmd: str) -> Tuple[str, ArgList]:
    """
    Parses a command string (e.g. `exit -F`) into a tuple:
        (<NAME>, <ARGS>)

    For example:
        ```
        s = "exit -F"
        c = parse_command(s)
        print(c)
        # c -> ("exit", ArgList<"-F">)
        ```
    """

    i = 0
    parts = [""]
    while i < len(cmd):
        ch = cmd[i]
        if (ch == " "):
            parts.append("")

        # Introduce string
        if (ch == "\"" or ch == "'"):
            j = i + 1
            s = ""
            while j < len(cmd):
                jch = cmd[j]
                if ch == jch and cmd[j-1] != "\\":
                    pass

        i += 1

def get_command():
    cmd = input(">>> ")

def main():
    while True:
        get_command()

if __name__ == "__main__":
    main()

console = Console()
