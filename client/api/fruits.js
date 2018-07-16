import request from 'superagent'

export function getFruits() {
    return (dispatch) => {
            request
                .get('/api/v1/fruits')
                .then(res => {
                    console.log(res.body)
                })
    }
}