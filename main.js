const toDoList = [
    {
        id: 1,
        title: 'homework',
        description: 'I have to make sure my homework is done',
        time: 'Do by 5:30 PM'
    },
    {
        id: 2,
        title: 'clean',
        description: 'Do my cleaning chores for the evening. i.e.: Mop, dishes, etc',
        time: 'Do by 8 PM'
    },
    {
        id: 3,
        title: 'work',
        description: 'Complete or work all current wood working projects',
        time: 'Do by 9:30 PM'
    },
    {
        id: 4,
        title: 'promote',
        description: 'Promote my shop on socials or take pics/vids',
        time: 'Do by 10:30 PM'
    },
    {
        id: 5,
        title: 'bed',
        description: 'Make bed, brush teeth, etc',
        time: 'Do by 12 PM'
    }
]

const heading = document.getElementById('heading')
heading.innerText = "Michelle's To Do List"

const subHeading = document.getElementById('subHeading')
subHeading.innerText = "My Daily Tasks"

const toDoListContainer = document.getElementById('toDoList')

for (const toDo of toDoList) {
    
    toDoListContainer.innerHTML +=
    `
        <div class="list-card" id="${toDo.id}">
            <h2 class="title">${toDo.title}</h2>
            <div class="description">
                <p>${toDo.description}</p>
                <p class="time">${toDo.time}</p>
            </div>
        </div>
`
}

/* 
    I used this method because I originally wanted to have the check box in each card 
    but couldn't figure out how to get it to repeat and still accept the JS rules 
    to get it to chance on click
*/
var image = document.getElementById('replace')
image.addEventListener('click', () => {
    changeImage()
})
function changeImage(){
    image.src = './images/checked.png'
}