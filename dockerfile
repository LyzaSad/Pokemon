FROM golang AS build
COPY . .
RUN go build pokemon

FROM gcr.io/distroless/base-debian12
COPY --from=build /go/pokemon /pokemon
ENV VERSION dev
ENTRYPOINT [ "/pokemon" ]