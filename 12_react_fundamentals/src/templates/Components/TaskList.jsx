import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';

const TaskList = ({ tarefas, handleDelete, handleEdit }) => {
  return (
    <ul className="tarefas">
      {tarefas &&
        tarefas.map((tarefa, i) => (
          <li key={i}>
            {tarefa}
            <span>
              <FaEdit
                onClick={(e) => handleEdit(e, i)}
                className="edit"
                title="Editar"
              />
              <FaWindowClose
                onClick={(e) => handleDelete(e, i)}
                className="delete"
                title="Deletar"
              />
            </span>
          </li>
        ))}
    </ul>
  );
};

TaskList.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
};

export default TaskList;
