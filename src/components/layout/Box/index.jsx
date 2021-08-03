import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('flexGrow')}
  ${propToStyle('background')}
  ${propToStyle('backgroundSize')}
  ${propToStyle('width')}
  ${propToStyle('minWidth')}
  ${propToStyle('height')}
  ${propToStyle('minHeight')}
  ${propToStyle('transform')}
  ${propToStyle('alignSelf')}
  ${propToStyle('padding')}
`;

export default Box;