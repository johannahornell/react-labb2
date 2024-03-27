import { StyledChangeTheme } from './styles/ChangeTheme.styled'
import { lightTheme, darkTheme } from './styles/Theme.styled'
import { IoSunny, IoSunnyOutline, IoMoonOutline, IoMoon } from 'react-icons/io5'

const ChangeTheme = ({ onClick, currentTheme }) => {
    return (
        <StyledChangeTheme>
            <h5>Theme:</h5>
            <button onClick={() => onClick(lightTheme)}>
                {currentTheme === lightTheme ? (
                    <IoSunny size={'1.8rem'} style={{ color: '#ff8f00' }} />
                ) : (
                    <IoSunnyOutline size={'1.8rem'} />
                )}
            </button>
            <button onClick={() => onClick(darkTheme)}>
                {currentTheme === lightTheme ? (
                    <IoMoonOutline size={'1.8rem'} />
                ) : (
                    <IoMoon size={'1.8rem'} style={{ color: '#ff8f00' }} />
                )}
            </button>
        </StyledChangeTheme>
    )
}

export default ChangeTheme
