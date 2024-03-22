import { StyledChangeTheme } from './styles/ChangeTheme.styled'
import { lightTheme, darkTheme } from './styles/Theme.styled'

const ChangeTheme = ({ onClick }) => {
    return (
        <StyledChangeTheme>
            <button onClick={() => onClick(darkTheme)}>Dark theme</button>
            <button onClick={() => onClick(lightTheme)}>Light Theme</button>
        </StyledChangeTheme>
    )
}

export default ChangeTheme
