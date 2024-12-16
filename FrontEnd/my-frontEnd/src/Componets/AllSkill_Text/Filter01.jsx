import React from 'react'

const Filter01 = ({ activeTab }) => {


    const skills = {
        "Data Science": [
            { name: "ChatGPT", learners: "3M+" },
            { name: "Data Science", learners: "7M+" },
            { name: "Python", learners: "46.6M+" },
            { name: "Machine Learning", learners: "8M+" },
            { name: "Deep Learning", learners: "2M+" },
            { name: "Artificial Intelligence (AI)", learners: "3M+" },
            { name: "Statistics", learners: "1M+" },
            { name: "Natural Language Processing (NLP)", learners: "790,700+" },
        ],
    };




    return (
        <div>
            {/* Skills Cards */}
            <div className="flex mt-4 gap-4 overflow-x-auto py-2">
                {skills[activeTab]?.map((skill, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer"
                    >
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                        <p className="text-sm text-gray-600">{skill.learners} learners</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter01