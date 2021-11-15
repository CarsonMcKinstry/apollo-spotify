// @ts-nocheck
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Album = Item & {
  __typename?: 'Album';
  albumType: AlbumType;
  artists: Array<Artist>;
  availableMarkets?: Maybe<Array<Scalars['String']>>;
  externalUrls: ExternalUrls;
  id: Scalars['ID'];
  images: Array<Image>;
  name: Scalars['String'];
  releaseDate: Scalars['String'];
  releaseDatePrecision: DatePrecision;
  restrictions?: Maybe<Restrictions>;
  totalTracks: Scalars['Int'];
  tracks: TrackResponse;
  type: ItemType;
  uri: Scalars['String'];
};


export type AlbumTracksArgs = {
  limit?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AlbumResponse = Pagination & {
  __typename?: 'AlbumResponse';
  albums: Array<Album>;
  limit: Scalars['Int'];
  next?: Maybe<Scalars['Int']>;
  offset: Scalars['Int'];
  previous?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
};

export enum AlbumType {
  Album = 'album',
  Compilation = 'compilation',
  Single = 'single'
}

export type Artist = Item & {
  __typename?: 'Artist';
  albums: AlbumResponse;
  externalUrls: ExternalUrls;
  followers: Followers;
  genres: Array<Scalars['String']>;
  id: Scalars['ID'];
  images: Array<Image>;
  name: Scalars['String'];
  popularity: Scalars['Int'];
  relatedArtists: RelatedArtists;
  topTracks: TopTracks;
  type: ItemType;
  uri: Scalars['String'];
};


export type ArtistAlbumsArgs = {
  limit?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ArtistTopTracksArgs = {
  market: Scalars['String'];
};

export type ArtistResponse = Pagination & {
  __typename?: 'ArtistResponse';
  artists: Array<Artist>;
  limit: Scalars['Int'];
  next?: Maybe<Scalars['Int']>;
  offset: Scalars['Int'];
  previous?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
};

export type Copyright = {
  __typename?: 'Copyright';
  text: Scalars['String'];
  type: CopyrightType;
};

export enum CopyrightType {
  Copyright = 'copyright',
  Performance = 'performance'
}

export enum DatePrecision {
  Day = 'day',
  Month = 'month',
  Year = 'year'
}

export type Episode = Item & {
  __typename?: 'Episode';
  audioPreviewUrl: Scalars['String'];
  description: Scalars['String'];
  duration: Scalars['Int'];
  explicit: Scalars['Boolean'];
  externalUrls: ExternalUrls;
  htmlDescription: Scalars['String'];
  id: Scalars['ID'];
  images: Array<Image>;
  isExternallyHosted: Scalars['Boolean'];
  isPlayable: Scalars['Boolean'];
  language: Scalars['String'];
  languages: Array<Scalars['String']>;
  name: Scalars['String'];
  releaseDate: Scalars['String'];
  releaseDatePrecision: DatePrecision;
  restrictions?: Maybe<Restrictions>;
  resumePoint: ResumePoint;
  show: Show;
  type: ItemType;
  uri: Scalars['String'];
};

export type EpisodeResponse = Pagination & {
  __typename?: 'EpisodeResponse';
  episodes: Array<Episode>;
  limit: Scalars['Int'];
  next?: Maybe<Scalars['Int']>;
  offset: Scalars['Int'];
  previous?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
};

export type ExternalIds = {
  __typename?: 'ExternalIds';
  ean?: Maybe<Scalars['String']>;
  isrc?: Maybe<Scalars['String']>;
  upc?: Maybe<Scalars['String']>;
};

export type ExternalUrls = {
  __typename?: 'ExternalUrls';
  spotify: Scalars['String'];
};

export type Followers = {
  __typename?: 'Followers';
  total: Scalars['Int'];
};

export type Image = {
  __typename?: 'Image';
  height: Scalars['Int'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type Item = {
  id: Scalars['ID'];
  name: Scalars['String'];
  type: ItemType;
  uri: Scalars['String'];
};

export enum ItemType {
  Album = 'album',
  Artist = 'artist',
  Episode = 'episode',
  Show = 'show',
  Track = 'track'
}

export type LinkedFrom = {
  __typename?: 'LinkedFrom';
  album: Album;
  artists: Array<Artist>;
};

export type Pagination = {
  limit: Scalars['Int'];
  next?: Maybe<Scalars['Int']>;
  offset: Scalars['Int'];
  previous?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  album: Album;
  albums: Array<Album>;
  artist?: Maybe<Artist>;
  artists: Array<Artist>;
  episode: Episode;
  episodes: Array<Episode>;
  health: Scalars['Boolean'];
  search?: Maybe<SearchResponse>;
  searchAlbum: AlbumResponse;
  searchArtist: ArtistResponse;
  searchEpisode: EpisodeResponse;
  searchShow: ShowResponse;
  searchTrack: TrackResponse;
  show: Show;
  shows: Array<Show>;
  track: Track;
  tracks: Array<Track>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID'];
  market?: Maybe<Scalars['String']>;
};


export type QueryAlbumsArgs = {
  ids: Array<Scalars['ID']>;
  market?: Maybe<Scalars['String']>;
};


export type QueryArtistArgs = {
  id: Scalars['ID'];
};


export type QueryArtistsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
  market?: Maybe<Scalars['String']>;
};


export type QueryEpisodesArgs = {
  ids: Array<Scalars['ID']>;
  market?: Maybe<Scalars['String']>;
};


export type QuerySearchArgs = {
  includeExternal?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
  type: Array<ItemType>;
};


export type QuerySearchAlbumArgs = {
  limit?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QuerySearchArtistArgs = {
  limit?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QuerySearchEpisodeArgs = {
  limit?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QuerySearchShowArgs = {
  limit?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QuerySearchTrackArgs = {
  limit?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QueryShowArgs = {
  id: Scalars['ID'];
  market?: Maybe<Scalars['String']>;
};


export type QueryShowsArgs = {
  ids: Array<Scalars['ID']>;
  market?: Maybe<Scalars['String']>;
};


export type QueryTrackArgs = {
  id: Scalars['ID'];
  market?: Maybe<Scalars['String']>;
};


export type QueryTracksArgs = {
  ids: Array<Scalars['ID']>;
  market?: Maybe<Scalars['String']>;
};

export type RelatedArtists = {
  __typename?: 'RelatedArtists';
  artists: Array<Artist>;
};

export enum RestrictionReason {
  Explicit = 'explicit',
  Market = 'market',
  Product = 'product'
}

export type Restrictions = {
  __typename?: 'Restrictions';
  reason: RestrictionReason;
};

export type ResumePoint = {
  __typename?: 'ResumePoint';
  fullyPlayed: Scalars['Boolean'];
  timestamp: Scalars['Int'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  albums?: Maybe<AlbumResponse>;
  artists?: Maybe<ArtistResponse>;
  episodes?: Maybe<EpisodeResponse>;
  shows?: Maybe<ShowResponse>;
  tracks?: Maybe<TrackResponse>;
};

export type Show = Item & {
  __typename?: 'Show';
  availableMarkets?: Maybe<Array<Scalars['String']>>;
  copyrights: Array<Copyright>;
  description: Scalars['String'];
  explicit: Scalars['Boolean'];
  externalUrls: ExternalUrls;
  htmlDescription: Scalars['String'];
  id: Scalars['ID'];
  images: Array<Image>;
  isExternallyHosted: Scalars['Boolean'];
  languages: Array<Scalars['String']>;
  mediaType: Scalars['String'];
  name: Scalars['String'];
  publisher: Scalars['String'];
  type: ItemType;
  uri: Scalars['String'];
};

export type ShowResponse = Pagination & {
  __typename?: 'ShowResponse';
  limit: Scalars['Int'];
  next?: Maybe<Scalars['Int']>;
  offset: Scalars['Int'];
  previous?: Maybe<Scalars['Int']>;
  shows: Array<Show>;
  total: Scalars['Int'];
};

export type TopTracks = {
  __typename?: 'TopTracks';
  tracks: Array<Track>;
};

export type Track = Item & {
  __typename?: 'Track';
  album: Album;
  artists: Array<Artist>;
  availableMarkets?: Maybe<Array<Scalars['String']>>;
  discNumber: Scalars['Int'];
  duration: Scalars['Int'];
  explicit: Scalars['Boolean'];
  externalIds: ExternalIds;
  id: Scalars['ID'];
  isLocal: Scalars['Boolean'];
  isPlayable?: Maybe<Scalars['Boolean']>;
  linkedFrom?: Maybe<LinkedFrom>;
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  restrictions?: Maybe<Restrictions>;
  trackNumber: Scalars['Int'];
  type: ItemType;
  uri: Scalars['String'];
};

export type TrackResponse = Pagination & {
  __typename?: 'TrackResponse';
  limit: Scalars['Int'];
  next?: Maybe<Scalars['Int']>;
  offset: Scalars['Int'];
  previous?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  tracks: Array<Track>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Album: ResolverTypeWrapper<Album>;
  AlbumResponse: ResolverTypeWrapper<AlbumResponse>;
  AlbumType: AlbumType;
  Artist: ResolverTypeWrapper<Artist>;
  ArtistResponse: ResolverTypeWrapper<ArtistResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Copyright: ResolverTypeWrapper<Copyright>;
  CopyrightType: CopyrightType;
  DatePrecision: DatePrecision;
  Episode: ResolverTypeWrapper<Episode>;
  EpisodeResponse: ResolverTypeWrapper<EpisodeResponse>;
  ExternalIds: ResolverTypeWrapper<ExternalIds>;
  ExternalUrls: ResolverTypeWrapper<ExternalUrls>;
  Followers: ResolverTypeWrapper<Followers>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Image: ResolverTypeWrapper<Image>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Item: ResolversTypes['Album'] | ResolversTypes['Artist'] | ResolversTypes['Episode'] | ResolversTypes['Show'] | ResolversTypes['Track'];
  ItemType: ItemType;
  LinkedFrom: ResolverTypeWrapper<LinkedFrom>;
  Pagination: ResolversTypes['AlbumResponse'] | ResolversTypes['ArtistResponse'] | ResolversTypes['EpisodeResponse'] | ResolversTypes['ShowResponse'] | ResolversTypes['TrackResponse'];
  Query: ResolverTypeWrapper<{}>;
  RelatedArtists: ResolverTypeWrapper<RelatedArtists>;
  RestrictionReason: RestrictionReason;
  Restrictions: ResolverTypeWrapper<Restrictions>;
  ResumePoint: ResolverTypeWrapper<ResumePoint>;
  SearchResponse: ResolverTypeWrapper<SearchResponse>;
  Show: ResolverTypeWrapper<Show>;
  ShowResponse: ResolverTypeWrapper<ShowResponse>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TopTracks: ResolverTypeWrapper<TopTracks>;
  Track: ResolverTypeWrapper<Track>;
  TrackResponse: ResolverTypeWrapper<TrackResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Album: Album;
  AlbumResponse: AlbumResponse;
  Artist: Artist;
  ArtistResponse: ArtistResponse;
  Boolean: Scalars['Boolean'];
  Copyright: Copyright;
  Episode: Episode;
  EpisodeResponse: EpisodeResponse;
  ExternalIds: ExternalIds;
  ExternalUrls: ExternalUrls;
  Followers: Followers;
  ID: Scalars['ID'];
  Image: Image;
  Int: Scalars['Int'];
  Item: ResolversParentTypes['Album'] | ResolversParentTypes['Artist'] | ResolversParentTypes['Episode'] | ResolversParentTypes['Show'] | ResolversParentTypes['Track'];
  LinkedFrom: LinkedFrom;
  Pagination: ResolversParentTypes['AlbumResponse'] | ResolversParentTypes['ArtistResponse'] | ResolversParentTypes['EpisodeResponse'] | ResolversParentTypes['ShowResponse'] | ResolversParentTypes['TrackResponse'];
  Query: {};
  RelatedArtists: RelatedArtists;
  Restrictions: Restrictions;
  ResumePoint: ResumePoint;
  SearchResponse: SearchResponse;
  Show: Show;
  ShowResponse: ShowResponse;
  String: Scalars['String'];
  TopTracks: TopTracks;
  Track: Track;
  TrackResponse: TrackResponse;
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  albumType?: Resolver<ResolversTypes['AlbumType'], ParentType, ContextType>;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  availableMarkets?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  externalUrls?: Resolver<ResolversTypes['ExternalUrls'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDatePrecision?: Resolver<ResolversTypes['DatePrecision'], ParentType, ContextType>;
  restrictions?: Resolver<Maybe<ResolversTypes['Restrictions']>, ParentType, ContextType>;
  totalTracks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tracks?: Resolver<ResolversTypes['TrackResponse'], ParentType, ContextType, RequireFields<AlbumTracksArgs, never>>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlbumResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlbumResponse'] = ResolversParentTypes['AlbumResponse']> = {
  albums?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  albums?: Resolver<ResolversTypes['AlbumResponse'], ParentType, ContextType, RequireFields<ArtistAlbumsArgs, never>>;
  externalUrls?: Resolver<ResolversTypes['ExternalUrls'], ParentType, ContextType>;
  followers?: Resolver<ResolversTypes['Followers'], ParentType, ContextType>;
  genres?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  popularity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relatedArtists?: Resolver<ResolversTypes['RelatedArtists'], ParentType, ContextType>;
  topTracks?: Resolver<ResolversTypes['TopTracks'], ParentType, ContextType, RequireFields<ArtistTopTracksArgs, 'market'>>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistResponse'] = ResolversParentTypes['ArtistResponse']> = {
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CopyrightResolvers<ContextType = any, ParentType extends ResolversParentTypes['Copyright'] = ResolversParentTypes['Copyright']> = {
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CopyrightType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EpisodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Episode'] = ResolversParentTypes['Episode']> = {
  audioPreviewUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  explicit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalUrls?: Resolver<ResolversTypes['ExternalUrls'], ParentType, ContextType>;
  htmlDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  isExternallyHosted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPlayable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  languages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDatePrecision?: Resolver<ResolversTypes['DatePrecision'], ParentType, ContextType>;
  restrictions?: Resolver<Maybe<ResolversTypes['Restrictions']>, ParentType, ContextType>;
  resumePoint?: Resolver<ResolversTypes['ResumePoint'], ParentType, ContextType>;
  show?: Resolver<ResolversTypes['Show'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EpisodeResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EpisodeResponse'] = ResolversParentTypes['EpisodeResponse']> = {
  episodes?: Resolver<Array<ResolversTypes['Episode']>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExternalIdsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExternalIds'] = ResolversParentTypes['ExternalIds']> = {
  ean?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExternalUrlsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExternalUrls'] = ResolversParentTypes['ExternalUrls']> = {
  spotify?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Followers'] = ResolversParentTypes['Followers']> = {
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  __resolveType: TypeResolveFn<'Album' | 'Artist' | 'Episode' | 'Show' | 'Track', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LinkedFromResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedFrom'] = ResolversParentTypes['LinkedFrom']> = {
  album?: Resolver<ResolversTypes['Album'], ParentType, ContextType>;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = {
  __resolveType: TypeResolveFn<'AlbumResponse' | 'ArtistResponse' | 'EpisodeResponse' | 'ShowResponse' | 'TrackResponse', ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  album?: Resolver<ResolversTypes['Album'], ParentType, ContextType, RequireFields<QueryAlbumArgs, 'id'>>;
  albums?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<QueryAlbumsArgs, 'ids'>>;
  artist?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType, RequireFields<QueryArtistArgs, 'id'>>;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType, RequireFields<QueryArtistsArgs, 'ids'>>;
  episode?: Resolver<ResolversTypes['Episode'], ParentType, ContextType, RequireFields<QueryEpisodeArgs, 'id'>>;
  episodes?: Resolver<Array<ResolversTypes['Episode']>, ParentType, ContextType, RequireFields<QueryEpisodesArgs, 'ids'>>;
  health?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  search?: Resolver<Maybe<ResolversTypes['SearchResponse']>, ParentType, ContextType, RequireFields<QuerySearchArgs, 'query' | 'type'>>;
  searchAlbum?: Resolver<ResolversTypes['AlbumResponse'], ParentType, ContextType, RequireFields<QuerySearchAlbumArgs, 'query'>>;
  searchArtist?: Resolver<ResolversTypes['ArtistResponse'], ParentType, ContextType, RequireFields<QuerySearchArtistArgs, 'query'>>;
  searchEpisode?: Resolver<ResolversTypes['EpisodeResponse'], ParentType, ContextType, RequireFields<QuerySearchEpisodeArgs, 'query'>>;
  searchShow?: Resolver<ResolversTypes['ShowResponse'], ParentType, ContextType, RequireFields<QuerySearchShowArgs, 'query'>>;
  searchTrack?: Resolver<ResolversTypes['TrackResponse'], ParentType, ContextType, RequireFields<QuerySearchTrackArgs, 'query'>>;
  show?: Resolver<ResolversTypes['Show'], ParentType, ContextType, RequireFields<QueryShowArgs, 'id'>>;
  shows?: Resolver<Array<ResolversTypes['Show']>, ParentType, ContextType, RequireFields<QueryShowsArgs, 'ids'>>;
  track?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<QueryTrackArgs, 'id'>>;
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType, RequireFields<QueryTracksArgs, 'ids'>>;
};

export type RelatedArtistsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RelatedArtists'] = ResolversParentTypes['RelatedArtists']> = {
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestrictionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Restrictions'] = ResolversParentTypes['Restrictions']> = {
  reason?: Resolver<ResolversTypes['RestrictionReason'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResumePointResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResumePoint'] = ResolversParentTypes['ResumePoint']> = {
  fullyPlayed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResponse'] = ResolversParentTypes['SearchResponse']> = {
  albums?: Resolver<Maybe<ResolversTypes['AlbumResponse']>, ParentType, ContextType>;
  artists?: Resolver<Maybe<ResolversTypes['ArtistResponse']>, ParentType, ContextType>;
  episodes?: Resolver<Maybe<ResolversTypes['EpisodeResponse']>, ParentType, ContextType>;
  shows?: Resolver<Maybe<ResolversTypes['ShowResponse']>, ParentType, ContextType>;
  tracks?: Resolver<Maybe<ResolversTypes['TrackResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Show'] = ResolversParentTypes['Show']> = {
  availableMarkets?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  copyrights?: Resolver<Array<ResolversTypes['Copyright']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  explicit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalUrls?: Resolver<ResolversTypes['ExternalUrls'], ParentType, ContextType>;
  htmlDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  isExternallyHosted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  languages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  mediaType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publisher?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShowResponse'] = ResolversParentTypes['ShowResponse']> = {
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shows?: Resolver<Array<ResolversTypes['Show']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopTracksResolvers<ContextType = any, ParentType extends ResolversParentTypes['TopTracks'] = ResolversParentTypes['TopTracks']> = {
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  album?: Resolver<ResolversTypes['Album'], ParentType, ContextType>;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  availableMarkets?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  discNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  explicit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalIds?: Resolver<ResolversTypes['ExternalIds'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPlayable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['LinkedFrom']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previewUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  restrictions?: Resolver<Maybe<ResolversTypes['Restrictions']>, ParentType, ContextType>;
  trackNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TrackResponse'] = ResolversParentTypes['TrackResponse']> = {
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>;
  AlbumResponse?: AlbumResponseResolvers<ContextType>;
  Artist?: ArtistResolvers<ContextType>;
  ArtistResponse?: ArtistResponseResolvers<ContextType>;
  Copyright?: CopyrightResolvers<ContextType>;
  Episode?: EpisodeResolvers<ContextType>;
  EpisodeResponse?: EpisodeResponseResolvers<ContextType>;
  ExternalIds?: ExternalIdsResolvers<ContextType>;
  ExternalUrls?: ExternalUrlsResolvers<ContextType>;
  Followers?: FollowersResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  LinkedFrom?: LinkedFromResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RelatedArtists?: RelatedArtistsResolvers<ContextType>;
  Restrictions?: RestrictionsResolvers<ContextType>;
  ResumePoint?: ResumePointResolvers<ContextType>;
  SearchResponse?: SearchResponseResolvers<ContextType>;
  Show?: ShowResolvers<ContextType>;
  ShowResponse?: ShowResponseResolvers<ContextType>;
  TopTracks?: TopTracksResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  TrackResponse?: TrackResponseResolvers<ContextType>;
};

