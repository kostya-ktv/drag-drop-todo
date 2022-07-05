import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { appDispatch } from '../Store/actions/store.actions';
import { NoteType, TaskType } from '../Store/types';
import { fetchFromLocalStorage } from '../Util/localStorage.service';

export const useFetchData = () => {
  const dispatch = useDispatch();
  const [fetchResult, setFetchResult] = useState<[]>([])

  const progressTasks: Array<TaskType> = [];
  const completeTasks: Array<TaskType> = [];
  const notes: Array<NoteType> = [];
  const [isFetching, setIsFetching] = useState<boolean>(false)

  useEffect(() => { 
    if(isFetching) {
      const fetchedData = fetchFromLocalStorage()
      setFetchResult(fetchedData)
    } 
  },[isFetching])

  useEffect(() => {
    if(isFetching) {
      fetchResult?.forEach((el: any) => {
        switch (el.type) {
          case 'complete':
            completeTasks.push(el);
            break;
          case 'note':
            notes.push(el);
            break;
          case 'progress':
            progressTasks.push(el);
            break;
          default:
            break;
        }
      });
      appDispatch('FETCH-COMPLETE', completeTasks, dispatch);
      appDispatch('FETCH-PROGRESS', progressTasks, dispatch);
      appDispatch('FETCH-NOTE', notes, dispatch);
      setIsFetching(false)
    }
  }, [fetchResult])
  return [setIsFetching]
};
