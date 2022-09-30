import trollFace from '../images/reddit.svg'

export default function Header(props){
    return (
        <div className='flex bg-slate-800 py-4'>
            <div className='flex mr-auto'>
                <img src = {trollFace} alt='Troll Face'  width= '60px' />
                <h1 className='text-3xl flex items-center text-white font-medium font-jost'>Reddit but Random</h1> 
            </div>
            {props.sub && <h1 className='mr-10 text-2xl flex items-center text-white'>You are now browsing r/{props.sub} </h1>}

        </div>
    )
}