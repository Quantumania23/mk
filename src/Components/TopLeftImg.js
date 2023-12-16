import Image from 'next/image'
// import Top from '../../public/top-left-img.png'

const TopLeftImg = () => {
    return (
        <div className='absolute left-0 top-0 mix-blend-color-dodge w-[200px] xl:w-[400px] dark:opacity-25
        '>
            <Image src='/top-left-img.png' width={400} height={400} alt='top-left-img' />
        </div>
    )
}

export default TopLeftImg