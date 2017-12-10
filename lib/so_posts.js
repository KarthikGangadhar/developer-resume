const stackexchange = require("stack-exchange");
const stack_me = new stackexchange.me();
const stack_answer = new stackexchange.answers();
const stack_question = new stackexchange.questions();

const options = {
    key: "U4DMV*8nvpm3EOpvf69Rxw((",
    access_token: "LZSqEy3JMRqqmx*lW6hdAQ))"
}

var GetPosts = () => {
    return new Promise(function (resolve, reject) {
        stack_me.me_answers(options, (response) => {
            let answers = JSON.parse(response);
            let postIds = [];
            let obj = {
                answer_id: "",
                title: "",
                date: ""
            }
            if (!!answers && !!answers.items) {
                question_ids = answers.items.map((x) => x.question_id);
                answers.items.forEach((item) => {
                    if (item.score > 0) {
                        obj.question_id = item.question_id
                        obj.answer_id = item.answer_id
                        obj.date = item.creation_date
                        postIds.push(obj);
                    }
                })
                // resolve(StackPosts(postIds, question_ids.join(";")));
            }
            StackPosts(postIds, question_ids.join(";")).then((qns_response) => {
                qns_response.items.forEach((item) => {
                    postIds.forEach((post) => {
                        if (post.question_id === item.question_id) {
                            post.title = item.title
                        }
                    })
                })
                return resolve({
                    "stResponse": postIds
                });
            });
        });
    })


}

const StackPosts = (postIds, question_ids) => {
    return new Promise(function (resolve, reject) {
        let posts = postIds
        quesions_response = stack_question.questions_by_ids(question_ids, options, (ansResponse) => {
            return resolve(JSON.parse(ansResponse));
        });
    })
};

module.exports = {
    getPosts: GetPosts
};