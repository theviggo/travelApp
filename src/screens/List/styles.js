import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

// Default
export const Container = styled.View``;
export const ContainerColumn = styled.View`
  flex: 1;
  flex-direction: column;
`;

// Header
export const ContainerHeader = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: white;
  padding: 48px 36px;
  padding-bottom: 24px;
  justify-content: space-between;
  align-items: center;
`;
export const SearchText = styled.Text``;

export const Avatar = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;

export const Title = styled.Text`
  font-size: 24px;
`;

// Main Container
export const Articles = styled.View`
  flex: 1;
`;

export const RenderContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Scroll = styled.FlatList.attrs({
  horizontal: true,
  pagingEnabled: true,
  scrollEnabled: true,
  showsHorizontalScrollIndicator: false,
  scrollEventThrottle: 16,
  snapToAlignment: 'center',
})`
  overflow: visible;
`;

// Destination
export const DestinationView = styled.View`
  width: ${width};
  border-radius: 12px;
  padding: 36px;
  margin: 0 36px;
`;
export const DestinationItemView = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const DestinationsText = styled.Text``;
export const DBackground = styled.ImageBackground.attrs({
  imageStyle: { borderRadius: 12 },
})`
  flex: 1;
  width: ${width - 36 * 2};
  margin: 0 36px;
  padding: 36px;
`;

export const UserImage = styled.Image`
  margin-right: 20px;
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;

export const UserName = styled.Text`
  font-weight: bold;
  color: white;
`;
export const UserLocation = styled.Text`
  color: white;
`;
export const ItemRating = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

export const ContainerRating = styled.View`
  align-items: flex-end;
`;

export const DestinationInfo = styled.View`
  position: absolute;
  border-radius: 12px;
  padding: 18px 36px;
  bottom: -36px;
  right: 36px;
  left: 36px;
  box-shadow: 0px 1px 4px black;
  background-color: white;
  z-index: 3;
  overflow: visible;
`;

export const DInfoTitle = styled.Text`
  font-weight: 500;
  font-size: 18px;
  padding: 8px 0;
`;

export const DInfoDesc = styled.Text`
  color: #667;
`;

// Recommended
export const RecommendedView = styled.View`
  padding: 36px;
`;
export const RecommendedText = styled.Text``;
