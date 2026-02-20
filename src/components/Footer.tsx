import classNames from 'classnames';
import { FilterStatus } from '../types/FilterStatus';

type Props = {
  status: FilterStatus;
  setStatus: (status: FilterStatus) => void;
  filters: FilterStatus[];
  activeTodos: number;
  completedTodos: boolean;
  onClearCopleted: () => void;
};

export const Footer: React.FC<Props> = ({
  status,
  setStatus,
  filters,
  activeTodos,
  completedTodos,
  onClearCopleted,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${activeTodos} items left`}
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        {filters.map(filter => (
          <a
            key={filter}
            href={`#/${filter === FilterStatus.All ? '' : filter.toLowerCase()}`}
            className={classNames('filter__link', {
              selected: status === filter,
            })}
            data-cy={`FilterLink${filter}`}
            onClick={() => setStatus(filter)}
          >
            {filter}
          </a>
        ))}
      </nav>

      {/* this button should be disabled if there are no completed todos */}

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={!completedTodos}
        onClick={onClearCopleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
