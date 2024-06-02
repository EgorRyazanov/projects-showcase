import { baseApi } from '@/shared/api';
import { ProjectDetails } from '@/entities/project';
import { mapDetailsDtoToModel } from '../lib/helpers/mapDetailsDtoToModel';
import { DetailsDto } from '../model/types/DetailsDto';

const detailsApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getDetails: build.query<ProjectDetails, number>({
            query: id => `/project/${id}`,
            transformResponse: (response: DetailsDto) => mapDetailsDtoToModel(response),
        }),
    }),
});

export const { useGetDetailsQuery } = detailsApi;
