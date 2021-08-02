import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('background')}
  ${propToStyle('backgroundSize')}
  ${propToStyle('width')}
  ${propToStyle('minWidth')}
  ${propToStyle('height')}
  ${propToStyle('minHeight')}
  ${propToStyle('transform')}
  ${propToStyle('margin')}
  ${propToStyle('position')}
  ${propToStyle('bottom')}
  ${propToStyle('right')}
`;

export default Box;