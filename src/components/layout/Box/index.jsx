import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('flexGrow')}
  ${propToStyle('flexFlow')}
  ${propToStyle('background')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundSize')}
  ${propToStyle('width')}
  ${propToStyle('minWidth')}
  ${propToStyle('height')}
  ${propToStyle('minHeight')}
  ${propToStyle('transform')}
  ${propToStyle('alignSelf')}
  ${propToStyle('alignItems')}
  ${propToStyle('padding')}
  ${propToStyle('gap')}
`;

export default Box;