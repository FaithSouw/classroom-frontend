import { Subject } from "@/types";

export const mocksubjects: Subject[] = [
    {
        id: 1,
        code: 'CS101',
        name: 'Introduction to Computer Science',
        department: 'CS',
        description: 'An introductory course cover',
        createAt: new Date().toISOString()
    },
    {
        id: 2,
        code: 'Math201',
        name: 'Calculus II',
        department: 'Math',
        description: 'Advanced study of integration',
        createAt: new Date().toISOString()
    },
    {
        id: 3,
        code: 'CS101',
        name: 'Literature and Composition',
        department: 'English',
        description: 'A course focused on critical',
        createAt: new Date().toISOString()
    },
]