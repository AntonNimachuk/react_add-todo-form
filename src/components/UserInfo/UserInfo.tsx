/* eslint-disable */

import users from '../../api/users';

interface Props {
  userId:number;
}

export const UserInfo : React.FC<Props> = ({userId}) => {
  return(
    <a className="UserInfo" href={`mailto:${users.find(u => u.id===userId)?.email}`}>
      {`${users.find(u => u.id===userId)?.name}`}
    </a>
  );
};
