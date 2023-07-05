import React from 'react'
import ThemeToggle from './ThemeToggle'
import List from './List'

const TodoList = () => {
    return (
        <div className='flex flex-col justify-between py-10 px-5 lg:pt-32'>
            <List />
        </div>
    )
}

export default TodoList