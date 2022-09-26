import React, { useEffect } from "react";
import CitizenData from "../../data/MOCK_DATA.json";
import { insert, search } from "../../processing/trie.js";
import _ from "lodash";
import { useState } from "react";

const CitizenSearch = ({ tree }) => {
    const [suggestion, setSuggestion] = useState([]);
    const onSearchChange = (e) => {
        if (e.target.value == "") setSuggestion([]);
        else {
            const ans = search(tree, e.target.value);
            // const ans = []
            // CitizenData.every((info) => {
            //     if (info.name.startsWith(e.target.value))
            //         ans.push(info.name)
            //     if (ans.length > 10)
            //         return false
            //     else
            //         return true
            // })
            setSuggestion(ans);
        }
    };

    return (
        <div
            className={[
                `w-screen min-h-screen bg-slate-300 flex justify-center`,
            ]}
        >
            <div className="w-3/5 my-2">
                <form className="flex w-full">
                    <div className="w-full">
                        <input
                            type="text"
                            id="name"
                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm ${
                                suggestion.length > 0
                                    ? "rounded-t-lg"
                                    : "rounded-lg"
                            } focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                            placeholder="Search here"
                            onChange={(e) => onSearchChange(e)}
                        />
                        <div className="">
                            {suggestion.map((item) => {
                                return (
                                    <h1
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                    >
                                        {item}
                                    </h1>
                                );
                            })}
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="h-fit mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={(e) => e.preventDefault()}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    let tree = {
        endOfWord: false,
        letter: null,
        children: {},
    };
    for (const data of CitizenData) {
        tree = insert(tree, data.name, data);
    }
    return { props: { tree } };
}

export default CitizenSearch;
