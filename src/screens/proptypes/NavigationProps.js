import PropTypes from 'prop-types';

const NavigationProps =
{
    navigation: PropTypes.shape(
        {
            navigate: PropTypes.func.isRequired,
            goBack: PropTypes.func.isRequired
        }
    )
}

export default NavigationProps