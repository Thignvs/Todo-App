import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import iconCheck from '../images/icon-check.svg';
import iconCross from '../images/icon-cross.svg';
import ThemeToggle from './ThemeToggle';

const List = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [showCompleted, setShowCompleted] = useState(true);
    const [filter, setFilter] = useState('all');
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() === '') return;
        const newTasks = [...tasks, { name: newTask, completed: false }];
        setTasks(newTasks);
        setNewTask('');
    };

    const handleDeleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const handleToggleTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const newTasks = Array.from(tasks);
        const [reorderedItem] = newTasks.splice(result.source.index, 1);
        newTasks.splice(result.destination.index, 0, reorderedItem);
        setTasks(newTasks);
    };

    const handleToggleShowCompleted = () => {
        setShowCompleted(!showCompleted);
    };

    const handleClearCompleted = () => {
        const filteredTasks = tasks.filter((task) => !task.completed);
        setTasks(filteredTasks);
    };

    const handleFilterTasks = (filterType) => {
        setFilter(filterType);
    };

    const filteredTasks = filter === 'completed' ? tasks.filter((task) => task.completed) : filter === 'incomplete' ? tasks.filter((task) => !task.completed) : tasks;

    const countIncompleteTasks = filteredTasks.filter((task) => !task.completed).length;

    const taskListId = 'taskList';

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };
    return (
        <div className="flex flex-col mx-auto w-full mt-8 max-w-screen-xl">
            <div className='text-VeryLightGray justify-between flex items-center pb-20'>
                <h1 className='font-bold tracking-widest text-4xl cursor-pointer'>TODO</h1>
                <div>
                    <ThemeToggle />
                </div>
            </div>
            <div className="flex mb-4 relative">
                <input
                    type="text"
                    className="p-5 rounded-md w-full focus:outline-none text-DarkGrayishBlue dark:text-DarkGrayishBlueDark dark:bg-VeryDarkDesaturatedBlueDark"
                    placeholder="Create a new todo..."
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button
                    className="absolute top-4 right-4"
                    onClick={handleAddTask}
                >
                    <img className='p-3 rounded-full bg-gradient-to-br from-GradientBlue to-GradientPurple' src={iconCheck} alt="checksvg" />
                </button>
            </div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId={taskListId}>
                    {(provided) => (
                        <ul
                            className="bg-VeryLightGray flex flex-col rounded-t-md dark:bg-VeryDarkDesaturatedBlueDark max-h-screen divide-LightGrayishBlue dark:divide-VeryDarkGrayishBlue divide-y"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {filteredTasks.map((task, index) => (
                                <Draggable key={index} draggableId={`task-${index}`} index={index}>
                                    {(provided) => (
                                        <li
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`flex items-center relative justify-between dark:text-LightGrayishBlueDark pl-14 lg:text-lg lg:py-3 ${task.completed ? 'line-through text-LightGrayishBlue dark:text-VeryDarkGrayishBlueDark2' : 'text-VeryDarkGrayishBlue'
                                                }`}
                                        >
                                            <input
                                                className='absolute left-5 appearance-none checked:bg-gradient-to-br from-GradientBlue to-GradientPurple rounded-full w-[25px] h-[25px] border checked:border-0 border-VeryLightGrayishBlue dark:border-VeryDarkGrayishBlueDark'
                                                type="checkbox"
                                                checked={task.completed}
                                                onChange={() => handleToggleTask(index)}
                                            />
                                            <img className={`absolute left-[27px] ${task.completed ? 'block' : 'hidden'}`} src={iconCheck} alt="checksvg" />
                                            <span>{task.name}</span>
                                            <button onClick={() => handleDeleteTask(index)}>
                                                <img className="p-5 " src={iconCross} alt="crossvg" />
                                            </button>
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            {tasks.length > 0 && (
                <div className='flex flex-row-reverse justify-between px-5 py-3 rounded-b-md border-t border-LightGrayishBlue dark:border-VeryDarkGrayishBlue bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlueDark  text-DarkGrayishBlue dark:text-DarkGrayishBlueDark '>
                    {showCompleted && (
                        <button onClick={handleClearCompleted} className="">
                            Clear Completed
                        </button>
                    )}
                    <div>
                        {countIncompleteTasks} {countIncompleteTasks === 1 ? 'item' : 'items'} left
                    </div>
                </div>
            )}
            <div className="flex items-center justify-around bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlueDark py-5 rounded-md mt-10 text-DarkGrayishBlue dark:text-DarkGrayishBlueDark font-bold ">
                <button className={`${filter === 'all' ? 'text-BlueSelected' : ''}`} onClick={() => handleFilterTasks('all')}>All</button>
                <button className={`${filter === 'incomplete' ? 'text-BlueSelected' : ''}`} onClick={() => handleFilterTasks('incomplete')}>Active</button>
                <button className={`${filter === 'completed' ? 'text-BlueSelected' : ''}`} onClick={() => handleFilterTasks('completed')}>Completed</button>
            </div>
            <p className='flex justify-center items-center mt-20 text-DarkGrayishBlue dark:text-DarkGrayishBlueDark font-bold '>Drag and drop to reorder list</p>
        </div>
    );
};

export default List;
