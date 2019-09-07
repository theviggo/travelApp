import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';

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
  flex: 2;
  flex-direction: row;
`;
export const DestinationsText = styled.Text``;
export const DBackground = styled.ImageBackground.attrs({
  imageStyle: { borderRadius: 12 },
})`
  flex: 1;
  width: ${width - 36 * 2};
  height: ${width * 0.6};
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
  box-shadow: 0px 1px 3px grey;
  shadow-radius: 4px;
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
  color: #999;
`;

// Dots
export const Dots = styled(Animated.View)`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border-width: 2.5;
  margin: 0 6px;
  background-color: #dce0e9;
  border-color: transparent;
`;

export const ContainerDots = styled.View`
  flex: 1;
  justify-content: center;
  margin-top: ${36 * 2}px;
  align-content: center;
  flex-direction: row;
`;

// Recommended
export const RecommendedContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 0 8px;
`;

export const RecommendedView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
`;
export const RTitle = styled.Text`
  font-size: 18px;
`;

export const RMore = styled.Text`
  color: #999;
  font-size: 20px;
`;

export const RRView = styled.View`
  flex-direction: column;
  width: ${width * 0.43};
  padding: 15px;
`;

export const RList = styled.FlatList.attrs({
  horizontal: true,
  pagingEnabled: true,
  scrollEnabled: true,
  scrollEventThrottle: 16,
  showsHorizontalScrollIndicator: false,
  snapToAlignment: 'center',
})``;

export const RBackground = styled.ImageBackground.attrs({
  imageStyle: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
})`
  flex: 1;
  box-shadow: 0px 1px 3px grey;
  shadow-radius: 4px;
  width: ${(width - 25 * 2) / 2};
  height: ${(width - 36 * 2) / 2};
`;

export const RFooter = styled.View`
  flex: 0.3;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 36px;
  padding: 18px;
`;

export const RContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const RFooterTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 8px;
`;

export const RFooterTemp = styled.Text`
  color: white;
`;
export const RFooterSave = styled.Text`
  color: white;
`;
export const RFooterDesc = styled.Text`
  color: #999;
`;

export const RFooterRating = styled.Text`
  color: #007bfa;
`;
