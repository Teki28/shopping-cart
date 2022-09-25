import {DirectoryItemContainer,BackgroundImage,Body} from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title,route } = category;
  const navigate = useNavigate();

  const onNavigiteHandler = ()=>navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigiteHandler}>
      <BackgroundImage
        imageUrl={imageUrl}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;