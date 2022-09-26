import _ from "lodash";

export const insert = (root = {}, word = "", content = {}) => {
    const letterList = word.split("");
    let node = _.clone(root);
    for (const lt of letterList) {
        if (!node.children[lt]) {
            const newNode = {
                endOfWord: false,
                letter: lt,
                children: {},
            };
            node.children[lt] = newNode;
            node = _.clone(newNode);
        } else node = _.clone(node.children[lt]);
    }
    node.endOfWord = true;
    node.content = content;
    return root;
};

export const search = (root = {}, str = "") => {
    const res = [];
    const DFS = (root, _str) => {
        if (Object.keys(root.children).length > 0)
            Object.keys(root.children).forEach((item) => {
                _str += item;
                return DFS(root.children[item], _str);
            });
        else if (_str) {
            res.push(_str);
        }
    };

    let node = _.clone(root);
    str.split("").forEach((letter) => {
        if (!node.children[letter]) return [];
        else {
            node = node.children[letter];
        }
    });
    Object.keys(node.children).forEach((item) => {
        DFS(node.children[item], str + item);
    });
    return res;
};
