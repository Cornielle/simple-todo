import { TaskService } from '../../services/task.service';

describe('Should edit the task given a title and description', ()=>{
  let service: TaskService;

  beforeEach(()=>{
    service: new TaskService();
  })
  it('Should edit given a title , description and id', ()=> {
    expect(service.editTask('a title', 'a description', 50)).toBe([
        {
            "title": 'a title',
            "description": 'a description',
            "finished": false
        }
    ])
  })
})
