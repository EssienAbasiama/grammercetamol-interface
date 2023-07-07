import React, { useState, useRef } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import InputComponent from "../ui/Input";

function Uploads() {
  const [files, setFile] = useState([]);

  const inputRef = useRef();
  const [courseName, setCourseName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorMail, setAuthormail] = useState("");

  async function handleUpload(event) {
    event.preventDefault();
    const formData = new FormData();
    console.log(formData);
    formData.append("courseName", courseName);
    formData.append("authorName", authorName);
    formData.append("authorMail", authorMail);

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }
    const response = await fetch(
      "http://localhost:8023/api/cloudinary/upload",
      {
        method: "POST",
        body: formData,
      }
    );
  }

  function onDragOver(events) {
    events.preventDefault();
  }

  function onDrop(events) {
    events.preventDefault();
    setFile(events.dataTransfer.files);
  }

  return (
    <div className="w-full min-h-[100vh] bg-white">
      <div className="w-[100%] min-h-[100vh] flex justify-center items-center">
        <form
          className="bg-[#4A6B5A] w-full sm:w-[60%] flex flex-col gap-6 shadow-md rounded p-2"
          onSubmit={handleUpload}
        >
          <div>
            <label
              htmlFor="price"
              className="block text-base font-medium leading-6 text-gray-900 text-center"
            >
              Author
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <InputComponent
                type="text"
                name="Author"
                id="Author"
                className="block w-full rounded-md border-0 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Author"
                value={authorName}
                onChange={(events) => setAuthorName(events.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="AuthorMail"
              className="block text-base font-medium leading-6 text-gray-900 text-center"
            >
              Author Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <InputComponent
                type="text"
                name="authorMail"
                id="authorMail"
                className="block w-full rounded-md border-0 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Author Email"
                value={authorMail}
                onChange={(events) => setAuthormail(events.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="courseName"
              className="block text-base font-medium leading-6 text-gray-900 text-center"
            >
              Course Name
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <InputComponent
                type="text"
                name="courseName"
                id="courseName"
                className="block w-full rounded-md border-0 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Author"
                value={courseName}
                onChange={(events) => setCourseName(events.target.value)}
              />
            </div>
          </div>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="pt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-base font-medium leading-6 text-gray-900 text-center pb-4"
                  >
                    Courses
                  </label>
                  <div
                    className="w-full sm:w-2/4 m-auto flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-slate-600"
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                  >
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <div className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                          {!files && (
                            <span onClick={() => inputRef.current.click()}>
                              Upload a file
                            </span>
                          )}
                          <InputComponent
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            multiple
                            hidden
                            ref={inputRef}
                            onChange={(events) => setFile(events.target.files)}
                          />
                        </div>
                        <p className="pl-1"> or drag and drop</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-700 p-3 rounded w-full sm:w-1/4 mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Uploads;
