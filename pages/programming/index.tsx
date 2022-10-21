import type { NextPage } from 'next'
import {CardLayout, FlexLayout, Frame, Title} from "@/modules/programming/styles";
import Card from "@/components/display/cards";
import React from "react";
const Programming: NextPage = () => {
  return (
      <Frame>
        <FlexLayout>
          <Title>HTML Articles!</Title>
          <CardLayout>
          </CardLayout>
        </FlexLayout>
      </Frame>
  )
}
export default Programming
