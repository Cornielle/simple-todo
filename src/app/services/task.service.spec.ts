import { TaskService } from './task.service';

describe('Editing the task.', () => {
  let service: TaskService;
  beforeEach(() => {
    service = new TaskService();
  });
  it('Should edit a task given a title , description and id', () => {
    expect(service.editTask('a title', 'a description', 0)).toEqual({
      title: 'a title',
      description: 'a description',
      finished: false,
    });
  });
  it("Shouldn't edit a task given a title , a description and  NULL as a ID", () => {
    expect(service.editTask('a title', 'a description', null)).toBeFalsy();
  });
  it("Shouldn't edit  a task given a blank title , a blank description and id", () => {
    expect(service.editTask('', '', 0)).toBeFalsy();
  });
});

describe('Adding the task.', () => {
  let service: TaskService;
  beforeEach(() => {
    service = new TaskService();
  });
  it("Shouldn't add a task given a title and no description", () => {
    expect(service.addTask('a title', '')).toBeFalsy();
  });
  it('Should add  a task given a title , description', () => {
    expect(service.addTask('a title', 'a description')).toEqual({
      title: 'a title',
      description: 'a description',
      finished: false,
    });
  });
  it("Shouldn't add a task given a blank title , a blank description", () => {
    expect(service.addTask('', '')).toBeFalsy();
  });
});

describe('Listing all tasks.', () => {
  let service: TaskService;
  beforeEach(() => {
    service = new TaskService();
  });
  it('Should retrieve all the tasks', () => {
    service.addTask('a title', 'a description');
    service.addTask('a title2', 'a description2');
    service.addTask('a title3', 'a description3');
    console.log(service.getTasks());
    expect(service.getTasks()).toEqual([
      {
        title: 'a title',
        description: 'a description',
        finished: false,
      },
      {
        title: 'a title2',
        description: 'a description2',
        finished: false,
      },
      {
        title: 'a title3',
        description: 'a description3',
        finished: false,
      },
    ]);
  });
});
