import React from "react";
import data from '../../data/MOCK_DATA.json'
import TrieNode from '../../processing/trie.js'

function CitizenSearch({ posts }) {
    return (
        <div className={"w-screen h-screen bg-slate-300 flex justify-center"}>
            <div className="w-3/5 my-2">
                <form>
                    <div>
                        <input
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search here"
                        />
                    </div>
                    <button
                        type="submit"
                        class="float-right my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const root = TrieNode()
    data.forEach((infomation) => {
        infomation.name.forEach((letter) => {
            root.insert()
        })
    })
    return {
      props: {
        res,
      },
    }
  }

export default CitizenSearch;
