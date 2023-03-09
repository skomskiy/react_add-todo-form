import ClassNames from 'classnames';
// import { TodoWithUser } from '../../types/TodoWithUser';
import { UserInfo } from '../UserInfo';
import { TodoWithUser } from '../../types/TodoWithUser';

type Props = {
  todo: TodoWithUser
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <li>
    <article
      data-id={todo.id}
      className={ClassNames('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">
        {todo.title}
      </h2>

      {todo.user !== undefined && <UserInfo user={todo.user} />}
    </article>
  </li>
);
