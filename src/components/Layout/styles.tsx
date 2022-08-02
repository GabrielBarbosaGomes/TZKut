import styled from 'styled-components';

export const LayoutComponent = styled.main`
  .container{
    margin-left: 24px;
    margin-right: 24px;
  }
  .paddingContainer{
    padding-left: 24px;
    padding-right: 24px;
    box-sizing: border-box;
  }
  @media (min-width: 768px){
    .container{
        margin-left: 48px;
        margin-right: 48px;
    }
    .paddingContainer{
        padding-left: 48px;
        padding-right: 48px;
    }
  }
  @media (min-width: 1024px){
    .container{
        margin-left: 96px;
        margin-right: 96px;
    }
    .paddingContainer{
        padding-left: 98px;
        padding-right: 98px;
    }
  }
  @media (min-width: 1366px){
    .container{
        margin-left: 156px;
        margin-right: 156px;
    }
    .paddingContainer{
        padding-left: 156px;
        padding-right: 156px;
    }
  }
  @media (min-width: 1440px){
    .container{
        margin-left: calc((100% - 1174px) / 2);
        margin-right: calc((100% - 1174px) / 2);
    }
    .paddingContainer{
        padding-left: calc((100% - 1174px) / 2);
        padding-right: calc((100% - 1174px) / 2);
    }
  }
`