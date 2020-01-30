import uuid from "react-uuid";

//날짜 빼주는 함수
function userDateMin(i) {
  const today = new Date();
  today.setDate(today.getDate() - i);
  let todayMonth = today.getMonth() + 1;
  if (today.getMonth() < 10) {
    todayMonth = "0" + (today.getMonth() + 1);
  }
  const todat = today.getFullYear() + "-" + todayMonth + "-" + today.getDate();
  return todat;
}

const todos = [
  {
    id: uuid(),
    text: "1",
    isChecked: false,
    date: userDateMin(1),
    fk_user_id: 1
  },
  {
    id: uuid(),
    text: "2",
    isChecked: true,
    date: userDateMin(0),
    fk_user_id: 1
  },
  {
    id: uuid(),
    text: "qwe",
    isChecked: true,
    date: userDateMin(2),
    fk_user_id: 1
  },
  {
    id: uuid(),
    text: "zxc",
    isChecked: true,
    date: userDateMin(1),
    fk_user_id: 1
  },
  {
    id: uuid(),
    text: "asd",
    isChecked: false,
    date: userDateMin(1),
    fk_user_id: 1
  },
  {
    id: uuid(),
    text: "a222",
    isChecked: false,
    date: userDateMin(2),
    fk_user_id: 1
  },
  {
    id: uuid(),
    text: "a2222",
    isChecked: false,
    date: userDateMin(2),
    fk_user_id: 1
  },
  {
    id: uuid(),
    text: "aaaa",
    isChecked: false,
    date: userDateMin(2),
    fk_user_id: 1
  },
  {
    id: uuid(),
    text: "aaa",
    isChecked: false,
    date: userDateMin(2),
    fk_user_id: 1
  },
  {
    id: uuid(),
    text: "aaa",
    isChecked: false,
    date: userDateMin(3),
    fk_user_id: 1
  },
  {
    id: uuid(),
    text: "aaa",
    isChecked: false,
    date: userDateMin(3),
    fk_user_id: 1
  },
  {
    id: uuid(),
    text: "3",
    isChecked: false,
    date: userDateMin(3),
    fk_user_id: 1
  }
];
export function getTodos() {
  return todos;
}
