export type IConsultationRequest = {
    fullName: string;
    phone: string;
}

export type DecodedToken = {
    userId: string;
    unique_name: string;
    role: string;
    roleId: string;
    isMustChangePassword: boolean;
    exp: number;
    iat: number;
    nbf: number;
    iss: string;
    aud: string;
    Id: string;
};

export type Course = {
    id: number;
    title: string;
    titleTj: string;
    description: string;
    descriptionTj: string;
    fullDescription: string;
    fullDescriptionTj: string;
    image: string;
    icon: string;
    borderColor: string;
    duration: string;
    durationTj: string;
    category: string;
    categoryTj: string;
    startDate: string;
    startDateTj: string;
    classesPerWeek: string;
    classesPerWeekTj: string;
    projectCount: string;
    projectCountTj: string;
    groupSize: string;
    groupSizeTj: string;
    seatsAvailable: string;
    seatsAvailableTj: string;
    certificate: string;
    certificateTj: string;
    salary: {
        junior: string;
        middle: string;
        senior: string;
    };
    requirements: Array<{
        text: string;
        textTj: string;
        icon: string;
    }>;
};