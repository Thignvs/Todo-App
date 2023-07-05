import React from 'react'
import TodoList from './TodoList'

const TodoContainer = () => {
    return (
        <div className='bg-[url("/src/assets/images/bg-mobile-light.jpg")] bg-no-repeat bg-cover bg-center dark:bg-[url("/src/assets/images/bg-mobile-dark.jpg")] block h-[300px] w-full lg:bg-[url("/src/assets/images/bg-desktop-light.jpg")] dark:lg:bg-[url("/src/assets/images/bg-desktop-dark.jpg")] lg:bg-cover lg:h-[500px] lg:px-20'>
            <div className='mx-auto'>
            <TodoList /></div>
        </div>
    )
}

export default TodoContainer