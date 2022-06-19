import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider, Stack } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 800, m: 'auto' }}>
      <CardHeader
        avatar={
            <Stack direction="row" spacing={2}>
            <Avatar alt="Alex Kost" src="./result.png" />
          </Stack>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Резюме Костюшко Олександр"
        subheader="Червень 18, 2022"
      />
      <CardMedia
        component="img"
        height="200"
        image="./resume.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" m="right">
        Кваліфікований розробник React.js з доведеним досвідом у розробці великомасштабних програмних продуктів. Маю досвід створення дизайну, керованого доменом, для реальних високонавантажених проектів. Завжди зосереджений на досягненні цілей та досягненні успіху в швидко розвиваючих та динамічних середовищах.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Divider />
          <Typography paragraph color={'#3f50b5'}>ОСВІТА:</Typography>
          <Typography paragraph>
            Національний університет «Острозька академія»
          </Typography>
          <Typography paragraph>
            2019 – 2023
          </Typography>
          <Typography paragraph>
            Економічний факультет, спеціальність «Комп’ютерні науки»
          </Typography>
          <Divider />
        <Typography paragraph color={'#3f50b5'}>ДОСВІД РОБОТИ:</Typography>
        <Typography paragraph color={'#f44336'}>
            IT HUB React.js developer
          </Typography>
          <Typography paragraph>
            31.01.2022–25.02.2022
          </Typography>
          <Typography paragraph>
            Роботу над проектом проводив на посаді front-end програміст, основною задачею було розробка нових блоків та верстка нових сторінок, а саме, модальне вікно для оформлення замовлення з реалізацією автоматичного вибору тарифу через спеціальний блок, розробка сторінки з вибором дисципліни та верстка сторінок з викладачами.
          </Typography>
          <Divider />
          <Typography paragraph color={'#f44336'}>
            G-Loot Back-end developer
          </Typography>
          <Typography paragraph>
            2019–2020
          </Typography>
          <Typography paragraph>
            Роботу над проектом проводив на посаді back-end програміст,
основна задача полягала в досконаленні системи слідкування та запису ігрового вікна користувача.
          </Typography>
          <Divider />
          <Typography paragraph color={'#f44336'}>
            Robocode
          </Typography>
          <Typography paragraph>
            2021 – 2021
          </Typography>
          <Typography paragraph>
          В компанії Robocode вивчав нейронні мережі, викладав архітектуру комп'ютера, в цьому закліда ти запустиш власний стартап ще до закінчення школи.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}