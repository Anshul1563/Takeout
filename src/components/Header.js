import trollFace from '../images/troll-face.png'

export default function Header(){
    return (
        <div className='flex bg-violet-600 py-4'>
            <div className='ml-10 flex mr-auto'>
                <img src = {trollFace} alt='Troll Face'  width= '60px' />
                <h1 className='text-3xl ml-2 flex items-center text-white font-medium font-jost'>Reddit but Random</h1> 
            </div>
            <h1 className='mr-10 text-2xl flex items-center text-white'>React Course - Project 3 </h1>

        </div>
    )
}