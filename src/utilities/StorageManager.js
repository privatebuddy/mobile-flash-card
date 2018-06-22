import { AsyncStorage } from 'react-native'
export function setUpInitialData() {
    const initialData = {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        };

    const initialData2 = {
        title: 'Toys',
        questions: [
            {
                question: 'What is Lego ?',
                answer: 'a toy make from plastic'
            },
            {
                question: 'Do Lego have red ?',
                answer: 'Yes'
            }
        ]
    };

    try {
        // AsyncStorage.clear();
        AsyncStorage.setItem('0', JSON.stringify(initialData));
        AsyncStorage.setItem('1', JSON.stringify(initialData2));
    } catch (error) {
        // Error saving data
    }
}

export async function addNewDeck(name)
{
    const newDeckData = {
        title: name,
        questions: []
    };

    return await AsyncStorage.getAllKeys().then((keys) => AsyncStorage.setItem(keys.length.toString(), JSON.stringify(newDeckData)));

    // AsyncStorage.setItem('0', JSON.stringify(initialData));
}

export async function addNewCard(question,answer,id)
{
    return AsyncStorage.getItem(id).then(result => {return JSON.parse(result)}).then((result) =>
        {
            result.questions.push({
                question: question,
                answer: answer
            });
            AsyncStorage.mergeItem(id,JSON.stringify(result));
        }
    )
}

export function retrieveAllDecks()
{
    return AsyncStorage.getAllKeys().then((keys) => {return AsyncStorage.multiGet(keys)});
}