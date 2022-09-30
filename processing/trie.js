import _ from "lodash";

export const insert = (root = {}, word = "", content = {}) => {
    const letterList = word.split("");
    let node = _.clone(root);
    for (let i = 0; i < letterList.length; i++) {
        const lt = letterList[i];
        if (!node.children[lt]) {
            const newNode = {
                endOfWord: false,
                letter: lt,
                children: {},
            };
            if (i === letterList.length - 1)
            {
                newNode.endOfWord = true;
                newNode.content = content;
            }
            node.children[lt] = newNode;
        }   
        node = _.clone(node.children[lt]);
    }
    return root;
};

export const search = (root = {}, str = "") => {
    const res = [];
    const DFS = (root, _str) => {
        if (!root.endOfWord)
        {
            const rootChild = Object.keys(root.children);
            for(const item of rootChild)
            {
                DFS(root.children[item], _str + item);
            }
        }
        else if (_str) {
            res.push(_str);
        }
    };

    let node = _.clone(root);
    const sprt = str.split("");
    for (let i = 0; i < sprt.length; i++) {
        const letter = sprt[i];
        if (!node.children[letter]) {
            return [];
        } else {
            node = node.children[letter];
        }
    }
    Object.keys(node.children).forEach((item) => {
        DFS(node.children[item], str + item);
    });
    return res;
};

export const searchItem = (root = {}, str = "") => {
    console.log(str);
    let node = _.clone(root);
    const sprt = str.split("");
    for (let i = 0; i < sprt.length; i++) {
        const letter = sprt[i];
        if (!node.children[letter]) {
            return {};
        }
        node = node.children[letter];
    }
    if (node.endOfWord) return node.content;
    return {};
};
