import { useState, useCallback } from "react";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      headers: requestConfig.headers ? requestConfig.headers : {},
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();
    // console.log(data);
    setIsLoading(false);
    applyData(data);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export const sendRequest = async (requestConfig) => {
  const response = await fetch(requestConfig.url, {
    method: requestConfig.method ? requestConfig.method : "GET",
    headers: requestConfig.headers ? requestConfig.headers : {},
    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
};

export const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(value);
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
