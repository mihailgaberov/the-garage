// Create a record
export const createRecord = (key: string, value: string): { error?: string } | void => {
  if (!key || !value) {
    return { error: 'Store to localStorage failed. Invalid key or value.' };
  }

  localStorage.setItem(key, JSON.stringify(value));
};

// Read a record
export const readRecord = (key: string): any => {
  const record = localStorage.getItem(key);
  return record ? JSON.parse(record) : null;
};

// Update a record
export const updateRecord = (key: string, value: string): { error?: string } | void => {
  if (!key || !value) {
    return { error: 'Store to localStorage failed. Invalid key or value.' };
  }
  localStorage.setItem(key, JSON.stringify(value));
};

// Delete a record
export const deleteRecord = (key: string): { error?: string } | void => {
  if (!key) { return { error: 'Delete from localStorage failed. Invalid key.' }; }
  localStorage.removeItem(key)
};

// Check for support
export const isLocalStorageSupported = (): boolean => !!window.localStorage;

// Store (create or update) record to local storage
export const storeToLocalStorage = (key: string, value: string): void => {
  if (isLocalStorageSupported()) {
    if (readRecord(key)) {
      updateRecord(key, value);
    } else {
      createRecord(key, value);
    }
  }
};