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