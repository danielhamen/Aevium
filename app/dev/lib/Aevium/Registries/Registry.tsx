export type RegistryReadAllDataEntries = { [key: string]: string };

export class Registry {
  private data: RegistryReadAllDataEntries;
  constructor() {
    this.data = {};
  }

  register(key: string, value: string): void {
    this.data[key] = value;
  }

  unregister(key: string): void {
    delete this.data[key];
  }

  read(key: string): string | undefined {
    return this.data[key];
  }

  readall(): RegistryReadAllDataEntries {
    return this.data;
  }
}
