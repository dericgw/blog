import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { pure } from 'recompose';

import format from 'date-fns/format'
import { grey } from '../../styles/colors';

const Excerpt = styled.article`
  padding: 18px;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

const Top = styled.div`
  display: flex;
`;

const Title = styled.h3`
  display: flex;
  flex: 5;
  align-items: flex-start;
`;

const Date = styled.span`
  display: flex;
  flex: 2;
  justify-content: flex-end;
  align-items: flex-start;
  font-size: 13px;
  font-style: italic;
  color: ${grey.default};
`;

const Body = styled.div``;

const PostExcerpt = ({ title, date, excerpt, path }) => (
  <Excerpt>
    <Top>
      <Link to={path}>
        <Title>{title}</Title>
      </Link>
      <Date>{format(date, `MMM D, 'YY`)}</Date>
    </Top>
    <Body>{excerpt}</Body>
  </Excerpt>
);

export default pure(PostExcerpt);