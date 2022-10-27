import React from "react";
import {IIcon} from "@/components/display/icons";
import {AiOutlineHome, AiOutlineSearch, AiOutlineYoutube} from "react-icons/ai";

interface IReview {
    subject:string,
    name:string,
    review:string,
}

const Reviews:IReview[] = [
    {subject:"Java",name:"유O욱",review:"자바를 2달여간 수강했는데 참 의미 있었습니다. 선생님이 말씀하신 물고기를 잡는 방법을 알려주시겠다는 방법론이 유익했습니다 이제 자바를 듣고 학교에서 수업을 들으니 더욱 와닿습니다. 유익한 강의였습니다."},
    {subject:"Python",name:"유O선",review:"파이썬은 처음 배워보는 프로그램 이여서 모르는 것이 많았는데 이번 수업을 통해서 많을것을 배웠습니다 처음 해보는 프로그램이여도 친철하게 알려주시고 모르는 부분을 반복 연습 통해 이해할때까지 학습 시켜주는 부분도 마음에 들었습니다. 덕분에 처음 보다 만은 프로그램을 짤수 있게 되었습니다."},
    {subject:"Python",name:"이O리",review:"수업시간에 애먹고 있었던 파이썬을 기초부터 배워서 학교에서 잘 써먹게 돼서 정말 기쁩니다. 초반에 있었던 기초 수업같은 것은 조금 지루하긴 했지만 나중에 진행하였던 파이썬 프로그래밍은 재밌었고 유익했습니다."},
    {subject:"Python",name:"박O미",review:"선생님이 정말 재밌으시고 잘 가르쳐주셔서 1개월 내로 기초적인 부분을 마스터할 수 있었습니다! 감사합니다"},
    {subject:"Java",name:"임O혁",review:"자바 프로그래밍 초급 강의라 기초부터 시작하였으나 수업 내용이 전반적으로 프로그래밍에 대한 이해를 위한 가르침도 있었던 강의였기에 수강완료 후 굉장이 만족도가 높았습니다.정해진 커리큘럼대로 가는 것도 좋지만 때로는 유동적으로 수강하고 있는 당시 학생들에게 필요한 지식의 부분들을 채워주시려는 시간들도 있어서 더욱 좋았습니다 제가 앞으로 공부하고 싶어하는 프로그래밍 분야의 수업 중 이번에 만나 뵈었던 선생님의 수업이 있다면 그 분께 수강 신청하고 싶네요~"},
];

export default Reviews;
