import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const ListLinksContainer = styled('ul')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  listStyle: 'none',
  '& li': {
    marginBottom: '8px',
  },
}));

export const ListLink = styled(Link)(({ theme }) => ({
  overflow: 'hidden',
  padding: theme.spacing(0.25),
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.texts?.primary,
  flexWrap: 'nowrap',
  '&:hover': {
    backgroundColor: theme.palette.backgrounds.primary,
    borderRadius: '4px',
    '& > *': {
      color: theme.palette.texts?.primary,
    },
  },
  '&:active': {
    backgroundColor: theme.palette.backgrounds.secondary,
  },
}));

export const SectionCaption = styled(Typography)(({ theme }) => ({
  color: theme.palette.texts?.primary,
  display: 'flex',
  alignItems: 'center',
  '& > svg ': {
    marginRight: theme.spacing(0.5),
  },
}));
