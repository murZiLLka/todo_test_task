import ItemObject from "./constructors/ItemObject";
import {LoremIpsum} from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 4,
        min: 2
    },
    wordsPerSentence: {
        max: 8,
        min: 4
    }
});


export const isExist = (checkElement, returnElement) => !checkElement ? null : returnElement ? returnElement : checkElement;

export const isNotEmptyArray = (checkArray) => checkArray && Array.isArray(checkArray) && checkArray.length > 0;

export const itemListLocalStorage = (itemList) => {
    try {
        if (itemList) {
            if (typeof itemList === "string") return localStorage.setItem('itemList', itemList);
            else return localStorage.setItem('itemList', JSON.stringify(itemList));
        }

        return JSON.parse(localStorage.getItem('itemList'));

    } catch (e) {
        if (itemList) return [];
    }
};

export const generateItemObjects = count => {
    let items = [];

    for (let i = 0; i < count; i++) {
        items.push(new ItemObject(lorem.generateSentences(1), lorem.generateParagraphs(2)));
    }
    return items;
};