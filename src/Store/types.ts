
export type TaskType = {
   type: 'progress' | 'complete'
   title: string,
   priority: string,
   expiredDate: string,
   isExpired?: boolean,
   id: string
}

export type NoteType = {
   type: 'note'
   title: string,
   id: string
}