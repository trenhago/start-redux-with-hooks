import { createTask } from '../index';

describe('action creators', () => {
  test('deveria gerar uma action para criar uma Task', () => {
    const task = { 
        title: 'Fazer os trabalhos de testes',
        description: 'Práticar a escrita de testes antes de iniciar o trabalho no petrofoam-ui'
    }
    const expectedAction = { 
        type: 'CREATE_TASK_STARTED',
        payload: { ...task, status: 'Unstarted' }
    };
    expect(createTask(task)).toEqual(expectedAction);
  });
});
