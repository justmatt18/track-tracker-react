import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({title})  => {
    const onClick = () => {
        console.log('clicked');
    }

    return (
      <div className='header-section'>
        <header className='header'>
            <h1>{title}</h1>
            <Button
                onClick = {onClick}
                color = 'green'
                text = 'Add' 
            />
        </header>
      </div>  
    )
}

Header.defaultProps = {
    title: 'Hello Matty',
}

Header.propTypes = { 
    title: PropTypes.string.isRequired,
}

export default Header;
